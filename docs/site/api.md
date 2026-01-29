---
outline: deep
---

# 运行时 URL 指南

本页说明查看器支持的运行时 URL 参数。所有参数均可组合使用。
当值包含特殊字符（`#`, `{`, `}`, `"`）时，需要进行 URL 编码。

基础地址：

```text
https://ldrfy.github.io/atoms_viewer/
```

---

## 1) 加载模型

加载一个模型：

```text
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz
```

加载多个模型（每个 URL 成为一个图层，顺序不变）：

```text
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz,https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/graphene.xyz
```

也支持多个 `url` 参数：

```text
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz&url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/graphene.xyz
```

---

## 2) 覆盖样例列表（空页面菜单）

`samples` 参数可覆盖空页面样例下拉列表的 `data.json` 地址：

```text
?samples=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/data.json
```

期望的 JSON 结构（数组）：

```json
[
  {
    "fileName": "cnt.xyz",
    "label": "cnt.xyz",
    "url": "https://example.com/cnt.xyz",
    "size": 0.009
  }
]
```

---

## 3) 设置覆盖

你可以将任意 ViewerSettings 字段名作为 query 参数传入。类型会依据当前默认值进行解析：
数字、布尔值、字符串或数组。

### 3.1 基础设置（扁平键）

```text
?atomScale=1.2&showBonds=false
```

背景色：

```text
?backgroundColor=ffffff&backgroundTransparent=false
```

说明：
- `backgroundColor` 支持 `ffffff`、`#ffffff`（需编码为 `%23ffffff`）或 `0xffffff`。
- 设置 `backgroundTransparent=false` 才能看到背景色。

### 3.2 分组键（导出结构前缀）

导出的设置结构使用分组名，以下前缀均支持：

`display.*`, `layerDisplay.*`, `background.*`, `colors.*`, `lammps.*`, `other.*`, `files.*`

示例：

```text
?display.rotationDeg.x=10&display.rotationDeg.y=20
```

### 3.3 JSON 对象值

部分设置是对象或数组（如 `autoRotate`, `rotationDeg`）。请传入 JSON：

```text
?autoRotate={"enabled":true,"presetId":"diag","speedDegPerSec":12,"pauseOnInteract":true,"resumeDelayMs":600}
```

```text
?display.rotationDeg={"x":10,"y":20,"z":0}
```

---

## 4) 组合示例

加载模型并设置自动旋转、背景与视角：

```text
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz&autoRotate.enabled=true&backgroundColor=ffffff&backgroundTransparent=false&display.rotationDeg.x=10&display.rotationDeg.y=20
```

加载两个模型并应用基础设置：

```text
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz,https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/graphene.xyz&atomScale=1.2
```
