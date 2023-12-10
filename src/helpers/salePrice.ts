export const salePrice = (n: number, p: number): number => {
    const discountedPrice = n - (n * (p / 100));
    return Math.ceil(discountedPrice * 100) / 100;
};