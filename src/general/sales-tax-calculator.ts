export class CalculateTotalAndSalesTax {
    private stateSalesTaxMap: Map<string, number> = new Map();

    constructor(stateSalesTaxMapParam: Map<string, number>) {
        this.stateSalesTaxMap = stateSalesTaxMapParam;
    }
    
    calculateSalesTax(originalPrice: number, provinceName: string): number {
        const salesTaxPercentage: number | undefined = this.stateSalesTaxMap.get(provinceName);

        if(salesTaxPercentage != undefined){
            const salesTax: number = (salesTaxPercentage * originalPrice) / 100;
            return salesTax;
        }

        return 0;
    }

    calculateTotal(originalPrice: number, provinceName: string): number {
        const salesTax: number = this.calculateSalesTax(originalPrice, provinceName);
        return salesTax + originalPrice;
    }

}

