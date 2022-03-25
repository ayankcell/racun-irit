export const state = () => ({
    baseHost : 'https://public-api.wordpress.com/rest/v1.1/sites/racunproduk.wordpress.com',
    perPage: 12,
    monthString: new Date().toLocaleDateString("id-ID", {month: "long",year: "numeric"})
})