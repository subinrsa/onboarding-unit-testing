const {
    add,
    toCamelCase
} = require ('./main');

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(8, 4)).toBe(12);
        expect(add(-2, 2)).toBe(0);
    });
    it('should not add strings', () => {
        expect(add(1, '2')).toBe(null);
        expect(add('1', 2)).toBe(null);
        expect(add('1', '2')).toBe(null);
    });
    it('should not add objects', () => {
        expect(add(1, {})).toBe(null);
    });
    it('should not add array', () => {
        expect(add(4, [])).toBe(null);
    });
});

describe('toCamelCase', () => {
    it('should remove underlines', () => {
        expect(toCamelCase('_convert_Me_To_Camel_Case_')).toBe('convertMeToCamelCase');
        expect(toCamelCase('convert_Me_To_Camel_Case_')).toBe('convertMeToCamelCase');
        expect(toCamelCase('_convert_Me_To_Camel_Case')).toBe('convertMeToCamelCase');
        expect(toCamelCase('test_Text')).toBe('testText');
        expect(toCamelCase('_test_Text_')).toBe('testText');
    });
    it('should detect other separators', () => {
        expect(toCamelCase('convert-Me-To-Camel-Case')).toBe('convertMeToCamelCase');
        expect(toCamelCase('convert+Me+To+Camel+Case')).toBe('convertMeToCamelCase');
        expect(toCamelCase('convert*Me*To*Camel*Case')).toBe('convertMeToCamelCase');
        expect(toCamelCase('convert.Me.To.Camel.Case')).toBe('convertMeToCamelCase');
        expect(toCamelCase('convert.Me*To-Camel_Case')).toBe('convertMeToCamelCase');
    });
    it('should ignore multiple underlines', () => {
        expect(toCamelCase('__convert__Me____To__Camel______Case__')).toBe('convertMeToCamelCase');
    });
    it('should handle a single word', () => {
        expect(toCamelCase('word')).toBe('word');
        expect(toCamelCase('Word')).toBe('word');
    });
    it('should handle an empty string', () => {
        expect(toCamelCase('')).toBe(null);
    });
    it('should handle a single space', () => {
        expect(toCamelCase(' ')).toBe(' ');
    });
    it('should set the first letter of each word uppercase', () => {
        expect(toCamelCase('_convert_me_to_camel_case_')).toBe('convertMeToCamelCase');
        expect(toCamelCase('_convert_Me_to_camel_Case_')).toBe('convertMeToCamelCase');
        expect(toCamelCase('_test_text_')).toBe('testText');
    });
    it('should set the very first letter lowercase', () => {
        expect(toCamelCase('_Convert_Me_To_Camel_Case_')).toBe('convertMeToCamelCase');
        expect(toCamelCase('_Test_text_')).toBe('testText');
    });
    it('should set every other letter to lowercase', () => {
        expect(toCamelCase('_CONVERT_ME_TO_CAMEL_CASE_')).toBe('convertMeToCamelCase');
        expect(toCamelCase('_CoNvErT_mE_To_CaMeL_cAsE_')).toBe('convertMeToCamelCase');
    });
});