abstract class AbstractEmail {
    protected abstract getHeader(): string;
    protected abstract getFooter(): string;

    public getMessage(content: String): string {
        let message = this.getHeader() + content + this.getFooter();
        return message;
    }
}

export class FormalEmail extends AbstractEmail {
    getHeader() {
        return "Dear Sir/Madame\n";
    }

    getFooter() {
        return "\nRegards";
    }
}

export class CasualEmail extends AbstractEmail {
    getHeader() {
        return "Yo dawg\n";
    }

    getFooter() {
        return "\nPeace!";
    }
}

let formalEmail = new FormalEmail();
let casualEmail = new CasualEmail();

console.log("Formal:", formalEmail.getMessage("Regarding the memo you've sent me...."));
console.log();
console.log("Casual:", casualEmail.getMessage("Check out those funny cats bro..."));