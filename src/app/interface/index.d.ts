import { JwtPayload } from 'jsonwebtoken';
type customData = {
  downloadType: any;
};
declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Request {
      user: JwtPayload | null;
      customData: customData | null | undefined;
    }
  }
}

import Option = Mailgen.Option;
import Content = Mailgen.Content;
/**
 * Created by kiettv on 7/24/16.
 */
declare class Mailgen {
    constructor(opts: Option);

    cacheThemes(): void;

    generate(params: Content): any;

    generatePlaintext(params: Content): any;

    parseParams(params: any): any;
}

declare namespace Mailgen {
    type Option = {
        theme: string | CustomTheme;
        product: Product;
    }

    type CustomTheme = {
        path: string;
        plaintextPath?: string | undefined;
    }

    type Product = {
        name: string;
        link: string;
        logo?: string | undefined;
        logoHeight?: string | undefined;
        copyright?: string | undefined;
    }

    type Content = {
        body: ContentBody;
    }

    type ContentBody = {
        name?: string | undefined;
        greeting?: string | undefined;
        signature?: string | undefined;
        title?: string | undefined;
        intro?: string | string[] | undefined;
        action?: Action | Action[] | undefined;
        table?: Table | Table[] | undefined;
        dictionary?: any;
        goToAction?: GoToAction | undefined;
        outro?: string | string[] | undefined;
    }

    type Table = {
        data: any[];
        columns?: ColumnOptions[] | undefined;
    }

    type ColumnOptions = {
        customWidth: any;
        customAlignment: any;
    }

    type GoToAction = {
        text: string;
        link: string;
        description: string;
    }

    type Action = {
        instructions: string;
        button: Button;
    }

    type Button = {
        color: string;
        text: string;
        link: string;
    }
}

export = Mailgen;
