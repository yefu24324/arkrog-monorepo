import type { Connection } from "kuzu";

/** Kuzu 节点表定义；稳定字符串主键保证每次重建均可追踪同一事实。 */
const NODE_TABLES = [
  "CREATE NODE TABLE Source(id STRING, kind STRING, path STRING, digest STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE SchemaDefinition(id STRING, name STRING, kind STRING, sourcePath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Item(id STRING, rawId STRING, topic STRING, name STRING, description STRING, rarity STRING, itemType STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Effect(id STRING, key STRING, parameters STRING, sourceKind STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Parameter(id STRING, key STRING, numericValue DOUBLE, stringValue STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Field(id STRING, path STRING, description STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Mechanic(id STRING, name STRING, componentTypes STRING, events STRING, sourcePath STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE MechanicAction(id STRING, event STRING, componentType STRING, targetType STRING, buffOwner STRING, attributeType STRING, formulaItem STRING, damageMask STRING, applyWay STRING, rawJson STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE SemanticRule(id STRING, version INT64, name STRING, description STRING, zoneId STRING, status STRING, confidence DOUBLE, PRIMARY KEY(id))",
  "CREATE NODE TABLE DamageZone(id STRING, symbol STRING, name STRING, stage INT64, stacking STRING, formula STRING, PRIMARY KEY(id))",
] as const;

/** Kuzu 关系表定义；结论边直接携带证据与置信度。 */
const REL_TABLES = [
  "CREATE REL TABLE SOURCE_DECLARES_SCHEMA(FROM Source TO SchemaDefinition)",
  "CREATE REL TABLE SOURCE_CONTAINS_ITEM(FROM Source TO Item)",
  "CREATE REL TABLE SOURCE_DEFINES_MECHANIC(FROM Source TO Mechanic)",
  "CREATE REL TABLE SCHEMA_DESCRIBES_FIELD(FROM SchemaDefinition TO Field)",
  "CREATE REL TABLE ITEM_HAS_EFFECT(FROM Item TO Effect)",
  "CREATE REL TABLE EFFECT_HAS_PARAMETER(FROM Effect TO Parameter)",
  "CREATE REL TABLE EFFECT_USES_MECHANIC(FROM Effect TO Mechanic)",
  "CREATE REL TABLE MECHANIC_HAS_ACTION(FROM Mechanic TO MechanicAction)",
  "CREATE REL TABLE PARAMETER_MATCHES_FIELD(FROM Parameter TO Field)",
  "CREATE REL TABLE RULE_TARGETS_ZONE(FROM SemanticRule TO DamageZone)",
  "CREATE REL TABLE EFFECT_PREDICTED_BY(FROM Effect TO SemanticRule)",
  "CREATE REL TABLE FIELD_ENTERS_ZONE(FROM Field TO DamageZone, ruleId STRING, status STRING, confidence DOUBLE, reason STRING, evidencePath STRING)",
  "CREATE REL TABLE EFFECT_ENTERS_ZONE(FROM Effect TO DamageZone, ruleId STRING, status STRING, confidence DOUBLE, reason STRING, evidencePath STRING)",
] as const;

/** 在空数据库中创建完整属性图 schema。 */
export async function createGraphSchema(connection: Connection): Promise<void> {
  for (const statement of [...NODE_TABLES, ...REL_TABLES]) {
    const result = await connection.query(statement);
    const results = Array.isArray(result) ? result : [result];
    results.forEach((entry) => entry.close());
  }
}
