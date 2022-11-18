declare module "core/outsource/LibManager" {
    import * as turf from '@turf/helpers';
    class LibManager {
        static getTurf(): typeof turf;
        static toString(): string;
    }
    export { LibManager, turf };
}
declare module "core/control/template/Template" {
    import { turf } from "core/outsource/LibManager";
    class Template {
        // eslint-disable-next-line no-unused-vars
        static getPoint(lon: number, lat: number): turf.Feature<turf.Point>;
    }
    export { Template };
}

declare module "WorldRealEngine" {
    export const VERSION = "0.0.5";
    export { LibManager } from "core/outsource/LibManager";
    export { Template } from "core/control/template/Template";

}

//# sourceMappingURL=WorldRealEngine.d.ts.map