export class Introduction {
    private information: any;
    private extraText: string = "";

    constructor(informationParam: [string,number,string,string,string,string,string], extraTextParam: string) {
        this.information = informationParam;
        this.extraText = extraTextParam;
    }

    generateIntroduction() {
        console.log(`Hello, my name ${this.information[0]}. I am ${this.information[1]} years old. My pronouns are ${this.information[2]}. I am ${this.information[3]}. I like to ${this.information[4]}, ${this.information[5]} and ${this.information[6]}. ${this.extraText} I hope you enjoyed reading my introduction :D.`)
    }
}
