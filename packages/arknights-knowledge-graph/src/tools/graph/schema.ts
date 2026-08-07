import type { Connection } from "kuzu";

/** Kuzu 节点表定义；稳定字符串主键保证每次重建均可追踪同一事实。 */
const NODE_TABLES = [
  "CREATE NODE TABLE Source(id STRING, kind STRING, path STRING, digest STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE SchemaDefinition(id STRING, name STRING, kind STRING, sourcePath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Topic(id STRING, name STRING, description STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE TopicSystem(id STRING, topicId STRING, moduleType STRING, moduleKey STRING, name STRING, aliases STRING, description STRING, status STRING, objectCount INT64, sourceDigest STRING, reconstructedDigest STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE TopicSystemObject(id STRING, topicId STRING, systemId STRING, objectType STRING, rawKey STRING, arrayIndex INT64, displayName STRING, description STRING, searchText STRING, rawJson STRING, status STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE TopicSystemField(id STRING, objectId STRING, name STRING, valueType STRING, stringValue STRING, numericValue DOUBLE, booleanValue BOOLEAN, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE TopicSystemConcept(id STRING, topicId STRING, systemId STRING, name STRING, aliases STRING, description STRING, status STRING, evidencePath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE ExternalReference(id STRING, targetRawId STRING, inferredKind STRING, status STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Item(id STRING, rawId STRING, topic STRING, name STRING, description STRING, rarity STRING, itemType STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE RogueDifficulty(id STRING, topic STRING, modeDifficulty STRING, grade INT64, name STRING, ruleDesc STRING, classification STRING, unclassifiedReason STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE DifficultyEffect(id STRING, matchedText STRING, numericValue DOUBLE, target STRING, damageTypes STRING, evidenceKind STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Effect(id STRING, key STRING, parameters STRING, sourceKind STRING, classification STRING, unclassifiedReason STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Parameter(id STRING, key STRING, numericValue DOUBLE, stringValue STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Field(id STRING, path STRING, description STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE Mechanic(id STRING, name STRING, componentTypes STRING, events STRING, sourcePath STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE MechanicAction(id STRING, event STRING, componentType STRING, targetType STRING, buffOwner STRING, attributeType STRING, formulaItem STRING, damageMask STRING, applyWay STRING, rawJson STRING, jsonPath STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE SemanticRule(id STRING, version INT64, name STRING, description STRING, zoneId STRING, authority STRING, status STRING, confidence DOUBLE, evidencePaths STRING, PRIMARY KEY(id))",
  "CREATE NODE TABLE DamageZone(id STRING, symbol STRING, name STRING, stage INT64, stacking STRING, formula STRING, PRIMARY KEY(id))",
] as const;

/** Kuzu 关系表定义；结论边直接携带证据与置信度。 */
const REL_TABLES = [
  "CREATE REL TABLE SOURCE_DECLARES_SCHEMA(FROM Source TO SchemaDefinition)",
  "CREATE REL TABLE SOURCE_CONTAINS_TOPIC(FROM Source TO Topic)",
  "CREATE REL TABLE TOPIC_HAS_SYSTEM(FROM Topic TO TopicSystem)",
  "CREATE REL TABLE TOPIC_SYSTEM_HAS_OBJECT(FROM TopicSystem TO TopicSystemObject)",
  "CREATE REL TABLE TOPIC_SYSTEM_HAS_CONCEPT(FROM TopicSystem TO TopicSystemConcept)",
  "CREATE REL TABLE TOPIC_OBJECT_HAS_CHILD(FROM TopicSystemObject TO TopicSystemObject, key STRING, arrayIndex INT64)",
  "CREATE REL TABLE TOPIC_OBJECT_HAS_FIELD(FROM TopicSystemObject TO TopicSystemField)",
  "CREATE REL TABLE TOPIC_OBJECT_HAS_EFFECT(FROM TopicSystemObject TO Effect)",
  "CREATE REL TABLE TOPIC_OBJECT_REFERENCES_OBJECT(FROM TopicSystemObject TO TopicSystemObject, fieldName STRING, evidencePath STRING)",
  "CREATE REL TABLE TOPIC_OBJECT_REFERENCES_ITEM(FROM TopicSystemObject TO Item, fieldName STRING, evidencePath STRING)",
  "CREATE REL TABLE TOPIC_OBJECT_USES_MECHANIC(FROM TopicSystemObject TO Mechanic, fieldName STRING, evidencePath STRING)",
  "CREATE REL TABLE TOPIC_OBJECT_REFERENCES_EXTERNAL(FROM TopicSystemObject TO ExternalReference, fieldName STRING, evidencePath STRING)",
  "CREATE REL TABLE SOURCE_CONTAINS_ITEM(FROM Source TO Item)",
  "CREATE REL TABLE SOURCE_CONTAINS_DIFFICULTY(FROM Source TO RogueDifficulty)",
  "CREATE REL TABLE SOURCE_DEFINES_MECHANIC(FROM Source TO Mechanic)",
  "CREATE REL TABLE SCHEMA_DESCRIBES_FIELD(FROM SchemaDefinition TO Field)",
  "CREATE REL TABLE ITEM_HAS_EFFECT(FROM Item TO Effect)",
  "CREATE REL TABLE DIFFICULTY_HAS_EFFECT(FROM RogueDifficulty TO DifficultyEffect)",
  "CREATE REL TABLE DIFFICULTY_HAS_CONDITIONAL_ITEM(FROM RogueDifficulty TO Item, kind STRING, sourceItemId STRING, choiceId STRING, buffIndex INT64, evidencePath STRING)",
  "CREATE REL TABLE EFFECT_HAS_PARAMETER(FROM Effect TO Parameter)",
  "CREATE REL TABLE EFFECT_USES_MECHANIC(FROM Effect TO Mechanic)",
  "CREATE REL TABLE MECHANIC_HAS_ACTION(FROM Mechanic TO MechanicAction)",
  "CREATE REL TABLE PARAMETER_MATCHES_FIELD(FROM Parameter TO Field)",
  "CREATE REL TABLE RULE_TARGETS_ZONE(FROM SemanticRule TO DamageZone)",
  "CREATE REL TABLE SOURCE_SUPPORTS_RULE(FROM Source TO SemanticRule, evidencePath STRING)",
  "CREATE REL TABLE SOURCE_DEFINES_ZONE(FROM Source TO DamageZone)",
  "CREATE REL TABLE EFFECT_PREDICTED_BY(FROM Effect TO SemanticRule)",
  "CREATE REL TABLE DIFFICULTY_EFFECT_PREDICTED_BY(FROM DifficultyEffect TO SemanticRule)",
  "CREATE REL TABLE FIELD_ENTERS_ZONE(FROM Field TO DamageZone, ruleId STRING, status STRING, confidence DOUBLE, reason STRING, evidencePath STRING)",
  "CREATE REL TABLE EFFECT_ENTERS_ZONE(FROM Effect TO DamageZone, ruleId STRING, status STRING, confidence DOUBLE, reason STRING, evidencePath STRING)",
  "CREATE REL TABLE DIFFICULTY_EFFECT_ENTERS_ZONE(FROM DifficultyEffect TO DamageZone, ruleId STRING, status STRING, confidence DOUBLE, reason STRING, evidencePath STRING)",
] as const;

/** 在空数据库中创建完整属性图 schema。 */
export async function createGraphSchema(connection: Connection): Promise<void> {
  for (const statement of [...NODE_TABLES, ...REL_TABLES]) {
    const result = await connection.query(statement);
    const results = Array.isArray(result) ? result : [result];
    results.forEach((entry) => entry.close());
  }
}
