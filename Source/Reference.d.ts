Reference
declare module "aki-api" {
    export interface AkinatorAnswerInterface {
        id: string,
        name: string,
        id_base: string,
        proba: string,
        description: string,
        valide_contrainte: string,
        ranking: string,
        minibase_addable: string,
        relative_id: string,
        pseudo: string,
        picture_path: string,
        flag_photo: string,
        absolute_picture_path: string
    };

    class Akinator {
        public currentStep: number;
        public region: AkinatorRegion;
        public uri?: string;
        public urlApiWs?: string;
        public uriObj: any | null;
        public noUri: string;
        public noSession: string;
        public progress: number;
        public childMode: {
            childMode: boolean;
            softConstraint: string;
            questionFilter: string;
        };
        public question: string;
        public answers: AkinatorAnswerInterface[];
        public guessCount: number;

        public constructor(region: AkinatorRegion, childMode?: boolean);
        public start(): Promise<void>;
        public step(answerId: number | string): Promise<void>;
        public back(): Promise<void>;
        public win(): Promise<void>;
    }

    export type AkinatorRegion = "en" | "en_objects" | "en_animals" | "ar" | "cn" | "de" | "de_animals" | "es" | "es_animals" | "fr" | "fr_objects" | "fr_animals" | "il" | "it" | "it_animals" | "jp" | "jp_animals" | "kr" | "nl" | "pl" | "pt" | "ru" | "tr" | "id"
    export const regions: AkinatorRegion[];

    export { Akinator as Aki };
}