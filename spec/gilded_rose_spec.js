describe('Gilded Rose', () => {
  describe('Normal items', () => {
    it('Quality does not drop below 0', () => {
      const gildedRose = new Shop([ new Item('normal', 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });

    it('Quality decreases by 1 if sellIn has not expired', () => {
      const gildedRose = new Shop([ new Item('normal', 1, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(9);
    });

    it('Quality decreases by 2 if sellIn has expired', () => {
      const gildedRose = new Shop([ new Item('normal', 0, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(8);
    });
  });

  describe('Aged Brie', () => {
    it('Quality increases by 1 if sellIn has not expired', () => {
      const gildedRose = new Shop([ new Item('Aged Brie', 1, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(11);
    });

    it('Quality increases by 2 if sellIn has expired', () => {
      const gildedRose = new Shop([ new Item('Aged Brie', 0, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(12);
    });

    it('Quality does not go above 50', () => {
      const gildedRose = new Shop([ new Item('Aged Brie', 10, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(50);
    });
  });

  describe('Backstage passes', () => {
    it('Quality increases by 1 with more than 10 days left on sellIn', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(10);
      expect(items[0].quality).toEqual(11);
    });

    it('Quality increases by 2 with 6-10 days left on sellIn', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5);
      expect(items[0].quality).toEqual(12);
    });

    it('Quality increases by 3 with 1-5 days left on sellIn', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(13);
    });

    it('Quality decreases to 0 after sellIn expires', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });
  });

  describe('Sulfuras', () => {
    it('Quality and sellIn do not change', () => {
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 10, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(10);
      expect(items[0].quality).toEqual(80);
    });

    it('Quality and sellIn do not change... even if sellIn is 0', () => {
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(80);
    });
  });

  describe('Conjured', () => {
    it('Quality decreases by 2 if sellIn has not expired', () => {
      const gildedRose = new Shop([ new Item('conjured', 1, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(8);
    });

    it('Quality decreases by 4 if sellIn has expired', () => {
      const gildedRose = new Shop([ new Item('conjured', 0, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(6);
    });
  });
});
