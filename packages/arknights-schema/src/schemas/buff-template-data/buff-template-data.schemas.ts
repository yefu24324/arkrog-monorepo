/** buff_template_data.json 根动态字典的 Zod Schema。 */

import { z } from "zod";

import type { BuffTemplateData } from "../../types/buff-template-data/buff-template-data.types.js";
import { BuffTemplateSchema } from "./core.schemas.js";

/** 按模板 ID 保存全部战斗模板，并验证字典键与 templateKey 一致。 */
export const BuffTemplateDataSchema: z.ZodType<BuffTemplateData> = z
  .record(z.string(), BuffTemplateSchema)
  .superRefine((templates, context) => {
    // 外层键是稳定模板 ID，必须与记录内冗余的 templateKey 保持一致。
    for (const [templateId, template] of Object.entries(templates)) {
      if (template.templateKey === templateId) continue;
      context.addIssue({
        code: "custom",
        message: `模板字典键 ${templateId} 与 templateKey ${template.templateKey} 不一致。`,
        path: [templateId, "templateKey"],
      });
    }
  })
  .describe("buff_template_data.json 中按模板 ID 保存全部战斗模板的动态字典。");
