/* global define, describe, it, except */
define(['numbers'], function (numbers) {
    'use strict';

    describe('The numbers module', function () {
        describe('The add method', function () {
            it('should accept one or more numerical arguments and return the sum of them', function () {
                // Arrange
                var output;
                var input1 = 1;
                var input2 = 2;

                // Act
                output = numbers.add(input1, input2);

                // Assert
                expect(output).toEqual(3);
                expect(output).not.toEqual(4);
            });
        });
    });
});
