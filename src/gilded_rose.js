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
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i]
      item.updateQuality();

      if (item.name === 'Aged Brie') {
        this.brieUpdateQuality(item);
      }
      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.backstageUpdateQuality(item);
      }
      if (item.name === 'Sulfuras, Hand of Ragnaros') {
        this.sulfurasUpdateQuality(item);
      }
    return this.items;
    }
  }

  brieUpdateQuality(item) {
    item.sellIn -= 1
    if (item.quality >= 50) { return }
    item.quality += 1
    if (item.sellIn < 0) { item.quality += 1 }
  }

  backstageUpdateQuality(item) {
    item.sellIn -= 1
    if (item.quality >= 50) { return }
    if (item.sellIn < 0) { return item.quality = 0 }
    item.quality += 1
    if (item.sellIn < 10) { item.quality += 1 }
    if (item.sellIn < 5) { item.quality += 1 }
  }

  sulfurasUpdateQuality(item) {

  }
}
