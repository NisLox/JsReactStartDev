import LoadDataUtils from "../../../src/model/utils/LoadDataUtils";

describe("Testing load utility functions", () => {
    describe("GIVEN that the .tsv test data is correctly formatted", () => {
        describe("WHEN the data is loaded with the load function", () => {
            const testData = LoadDataUtils.loadDataSet(__dirname + "test/testFiles/MC1TestData.tsv");

            test("THEN the outputted object array is of the correct length", () => {
                expect(testData.length).toEqual(2);
            });

            test("AND the outputted object array has the correct values in it", () => {
                expect(testData[1].trust).toEqual("C3");
            })
        })
    });
});