/* global define, describe, it, except, beforeEach, spyOn */
define(['numbers', 'events'], function (numbers, events) {
    'use strict';

    describe('The numbers module', function () {
        describe('The add method', function () {
            var output;

            beforeEach(function () {
                // Arrange
                this.numberInput1 = 1;
                this.numberInput2 = 2;
                this.stringInput1 = '1';
                this.stringInput2 = 'oops';
                this.objectInput1 = {};
            });

            it('should accept one or more numerical arguments and return the sum of them', function () {
                // Act
                output = numbers.add(this.numberInput1, this.numberInput2);

                // Assert
                expect(output).toEqual(3);
                expect(output).not.toEqual(4);
            });

            it('should try to parse an integer when a string is passed to the method', function () {
                // Act
                output = numbers.add(this.numberInput1, this.stringInput1);

                // Assert
                expect(output).toEqual(2);
                expect(output).not.toEqual('11');
            });

            it('should ignore the argument if it is not a parseable string', function () {
                // Act
                output = numbers.add(this.numberInput1, this.stringInput2);

                // Assert
                expect(output).toEqual(1);
                expect(output).not.toEqual('1oops');

                // Re-act
                output = numbers.add(this.numberInput1, this.objectInput1);

                // And re-assert
                expect(output).toEqual(1);
                expect(output).not.toEqual({});
            });

            it('should publish an added event showing the operands passed to the method and the result', function () {
                // Listen
                spyOn(events, 'publish');

                // Act
                numbers.add(this.numberInput1, this.numberInput2);

                // Assert
                expect(events.publish).toHaveBeenCalled();
                expect(events.publish).toHaveBeenCalledWith('added', { operands: [this.numberInput1, this.numberInput2], result: 3 });
            });
        });
    });
});
