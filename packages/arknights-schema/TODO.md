# 其他数据表覆盖计划

当前优先完成 `roguelike_topic_table.json`。下列 `zh_CN/gamedata/excel` 数据表尚未纳入公开类型与 Zod Schema，后续应按业务领域逐批处理。

## 待处理原则

- 每次选择一个或一组强关联数据表。
- 先运行全量结构分析，再确认字典、固定对象和字符串枚举边界。
- 新增显式 TypeScript 类型、严格 Zod Schema、中文文档和全量校验用例。
- 完成后从本文件移除对应条目，并在变更记录中注明数据版本。

## 待处理数据表

<!-- DATA_TABLE_TODO:START -->

- [ ] `activity_table.json`
- [ ] `audio_data.json`
- [ ] `battle_equip_table.json`
- [ ] `building_data.json`
- [ ] `campaign_table.json`
- [ ] `chapter_table.json`
- [ ] `char_master_table.json`
- [ ] `char_meta_table.json`
- [ ] `char_patch_table.json`
- [ ] `character_table.json`
- [ ] `charm_table.json`
- [ ] `charword_table.json`
- [ ] `checkin_table.json`
- [ ] `climb_tower_table.json`
- [ ] `clue_data.json`
- [ ] `crisis_table.json`
- [ ] `crisis_v2_table.json`
- [ ] `display_meta_table.json`
- [ ] `enemy_handbook_table.json`
- [ ] `favor_table.json`
- [ ] `gacha_table.json`
- [ ] `gamedata_const.json`
- [ ] `handbook_info_table.json`
- [ ] `handbook_table.json`
- [ ] `handbook_team_table.json`
- [ ] `hotupdate_meta_table.json`
- [ ] `init_text.json`
- [ ] `item_table.json`
- [ ] `main_text.json`
- [ ] `medal_table.json`
- [ ] `meta_ui_table.json`
- [ ] `mission_table.json`
- [ ] `open_server_table.json`
- [ ] `player_avatar_table.json`
- [ ] `range_table.json`
- [ ] `replicate_table.json`
- [ ] `retro_table.json`
- [ ] `roguelike_table.json`
- [ ] `sandbox_perm_table.json`
- [ ] `sandbox_table.json`
- [ ] `shop_client_table.json`
- [ ] `skill_table.json`
- [ ] `skin_table.json`
- [ ] `special_operator_table.json`
- [ ] `stage_table.json`
- [ ] `story_review_meta_table.json`
- [ ] `story_review_table.json`
- [ ] `story_table.json`
- [ ] `tech_buff_table.json`
- [ ] `tip_table.json`
- [ ] `token_table.json`
- [ ] `uniequip_data.json`
- [ ] `uniequip_table.json`
- [ ] `vc/vc_config.json`
- [ ] `zone_table.json`

<!-- DATA_TABLE_TODO:END -->
