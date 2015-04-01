describe('isNumberのテスト', function() {

	it('数字を与えたらtrueが返る', function() {
		var testData = 123;
		expect(AjaxZip3.isNumber(testData)).toBe(true);
	});

	it('文字列で数字を与えたらtrueが返る', function() {
		var testData = "123";
		expect(AjaxZip3.isNumber(testData)).toBe(true);
	});

	it('undefinedを与えたらfalseが返る', function() {
		var testData = undefined;
		expect(AjaxZip3.isNumber(testData)).toBe(false);
	});

	it('数字以外混じりの文字列を与えたらfalseが返る', function() {
		var testData = "123j45";
		expect(AjaxZip3.isNumber(testData)).toBe(false);
	});
});