describe('getSimpleのテスト', function() {
	var actual;

	beforeEach(function(done) {
		var zip3 = "252";
		var zip4 = "0239"

		AjaxZip3.getSimple(zip3, zip4, function(addrObj) {
			actual = addrObj;
			done();
		});
	});

	it('2520239を与えたら相模原の中央が返る', function() {
		var expectObj = {
      pref_id: 14,
      pref_name: '神奈川県',
      city: '相模原市中央区',
      area: '中央',
      strt: ''
		}

		expect(actual).toEqual(expectObj);
	});

});