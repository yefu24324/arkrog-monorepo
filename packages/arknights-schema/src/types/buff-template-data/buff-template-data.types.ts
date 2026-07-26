/** buff_template_data.json 根动态字典的显式类型。 */

import type { BuffTemplate } from "./core.types.js";

/** 按模板 ID 保存全部战斗模板的动态字典。 */
export type BuffTemplateData = Record<string, BuffTemplate>;
