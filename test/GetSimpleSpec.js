describe('getSimpleのテスト', function() {
	var actual;
	var when = function(zip3, zip4, done) {
		AjaxZip3.getSimple(zip3, zip4, function(addrObj) {
			actual = addrObj;
			done();
		});
	}

	afterEach(function() {
		actual = null;
		AjaxZip3.addr_obj = {
        pref_id: '',
        pref_name: '',
        city: '',
        area: '',
        strt: ''
		}
	});

	describe('正常系テスト', function() {
		beforeEach(function(done) {
			var zip3 = "252";
			var zip4 = "0239"
			when(zip3, zip4, done);
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

	describe('異常系テスト', function() {
		describe('下4桁が存在しない郵便番号を与えたら', function() {
			beforeEach(function(done) {
				var zip3 = "252";
				var zip4 = "9999"
				when(zip3, zip4, done);
			});

			it('空のオブジェクトが返る', function() {
				var expectObj = {
		      pref_id: '',
		      pref_name: '',
		      city: '',
		      area: '',
		      strt: ''
				}

				expect(actual).toEqual(expectObj);
			});
		});

		describe('上3桁が存在しない郵便番号を与えたら', function() {
			beforeEach(function(done) {
				var zip3 = "999";
				var zip4 = "0239"
				when(zip3, zip4, done);
			});

			it('空のオブジェクトが返る', function() {
				var expectObj = {
		      pref_id: '',
		      pref_name: '',
		      city: '',
		      area: '',
		      strt: ''
				}

				expect(actual).toEqual(expectObj);
			});

		});

		describe('指定した郵便番号が7桁に満たない場合', function() {
			beforeEach(function(done) {
				var zip3 = "99";
				var zip4 = "0239"
				when(zip3, zip4, done);
			});

			it('空のオブジェクトが返る', function() {
				var expectObj = {
		      pref_id: '',
		      pref_name: '',
		      city: '',
		      area: '',
		      strt: ''
				}

				expect(actual).toEqual(expectObj);
			});
		});
	});
});
