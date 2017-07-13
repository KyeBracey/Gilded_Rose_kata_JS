class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (item.name === 'normal') {
        this.normalUpdateQuality(item);
      }
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

  normalUpdateQuality(item) {
    item.sellIn -= 1
    if (item.quality <= 0) { return }
    item.quality -= 1
    if (item.sellIn < 0) { item.quality -= 1 }
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
