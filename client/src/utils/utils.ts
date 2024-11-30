export const randomBetweenOneAndMax = (max: number) : number => {
    return Math.floor(Math.random() * max) + 1;
}

export const randomBetweenZeroAndMaxMinusOne = (max: number) : number => {
    return Math.floor(Math.random() * max);
}