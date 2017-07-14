class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Normal extends Item {
  updateQuality() {
    this.sellIn -= 1
    if (this.quality <= 0) { return }
    this.quality -= 1
    if (this.sellIn < 0) { this.quality -= 1 }
  }
}

class Brie extends Item {
  updateQuality() {
    this.sellIn -= 1
    if (this.quality >= 50) { return }
    this.quality += 1
    if (this.sellIn < 0) { this.quality += 1 }
  }
}

class Backstage extends Item {
  updateQuality() {
    this.sellIn -= 1
    if (this.sellIn < 0) { return this.quality = 0 }
    if (this.quality >= 50) { return }
    this.quality += 1
    if (this.sellIn < 10) { this.quality += 1 }
    if (this.sellIn < 5) { this.quality += 1 }
  }
}

class Sulfuras extends Item {
  updateQuality() {

  }
}

class Conjured extends Item {
  updateQuality() {
    this.sellIn -= 1
    if (this.quality <= 0) { return }
    this.quality -= 2
    if (this.sellIn < 0) { this.quality -= 2 }
  }
}

class Shop {
  constructor(items=[]){
    this.items = items.map(function (item) {
      return new (this.classFor(item))(item.name, item.sellIn, item.quality)
    }.bind(this));
  }

  classFor(item) {
    switch (item.name) {
      case 'normal':
        return Normal
      case 'Aged Brie':
        return Brie
      case 'Backstage passes to a TAFKAL80ETC concert':
        return Backstage
      case 'Sulfuras, Hand of Ragnaros':
        return Sulfuras
      case 'conjured':
        return Conjured
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i]
      item.updateQuality();
    }
    return this.items;
  }
}
