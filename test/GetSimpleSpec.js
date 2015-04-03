describe('getSimpleのテスト', function() {
	var actual;
	var when = function(zip3, zip4, done) {
		AjaxZip3.getSimple(zip3, zip4, function(addrObj) {
			actual = addrObj;
			done();
		});
	};

	afterEach(function() {
		actual = null;
	});

	describe('正常系テスト', function() {
		beforeEach(function(done) {
			var zip3 = "100";
			var zip4 = "0005";
			when(zip3, zip4, done);
		});

		it('1000005を与えたら東京の丸の内が返る', function() {
			var expectObj = {
	      pref_id: 13,
	      pref_name: '東京都',
	      city: '千代田区',
	      area: '丸の内',
	      strt: ''
			};

			expect(actual).toEqual(expectObj);
		});
	});

	describe('異常系テスト', function() {
		describe('下4桁が存在しない郵便番号を与えたら', function() {
			beforeEach(function(done) {
				var zip3 = "100";
				var zip4 = "9999";
				when(zip3, zip4, done);
			});

			it('空のオブジェクトが返る', function() {
				var expectObj = {
		      pref_id: '',
		      pref_name: '',
		      city: '',
		      area: '',
		      strt: ''
				};

				expect(actual).toEqual(expectObj);
			});
		});

		describe('上3桁が存在しない郵便番号を与えたら', function() {
			beforeEach(function(done) {
				var zip3 = "999";
				var zip4 = "0005";
				when(zip3, zip4, done);
			});

			it('空のオブジェクトが返る', function() {
				var expectObj = {
		      pref_id: '',
		      pref_name: '',
		      city: '',
		      area: '',
		      strt: ''
				};

				expect(actual).toEqual(expectObj);
			});

		});

		describe('指定した郵便番号が7桁に満たない場合', function() {
			beforeEach(function(done) {
				var zip3 = "99";
				var zip4 = "0005";
				when(zip3, zip4, done);
			});

			it('空のオブジェクトが返る', function() {
				var expectObj = {
		      pref_id: '',
		      pref_name: '',
		      city: '',
		      area: '',
		      strt: ''
				};

				expect(actual).toEqual(expectObj);
			});
		});
	});
});
