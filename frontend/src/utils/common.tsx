import { MAX_DIAGRAM_HEIGHT } from "./constants";

export const getPercentageFromDecimal = (value: string): number => {
    let result: number = +value.slice(0,3).split('.').join('');

    if (result > MAX_DIAGRAM_HEIGHT) {
        const rest = result - MAX_DIAGRAM_HEIGHT;

        result = result - rest + (rest / 3);
    }

    return result;
}

export const formTotalRate = (values: Array<number>): number => {
    return convertDecimalNumber(values?.reduce((a,b) => a + b) / values.length, 4);
}

export const convertDecimalNumber = (value: number | string, endSlicePoint: number): number => {
    return +(value.toString().slice(0, endSlicePoint));
}