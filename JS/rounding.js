function round(value: number, decimalPlaces: number): number {
    if (isNaN(value))
        return value;

    if (decimalPlaces == 0) return Math.round(value);
    const pow = Math.pow(10, decimalPlaces);
    return Math.round(value * pow) / pow;
}
