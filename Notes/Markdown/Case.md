# Markdown语法示例

### 段落格式

*这是斜体*
_这也是斜体_

**这是粗体**
__这也是粗体__

***这是粗斜体***
___这是粗斜体___


三种分割线：
***
___
---

~~删除线~~

<u>下划线</u>

注释在最底部[^参考文献1]

[^参考文献1]: 注释在这！

### 列表

* 无序列表1
+ 无序列表2
- 无序列表3 


1. hello
2. 恶恶
   1. 的
      1. 
3. ego
   1.加油

### 区块

> 区块1
> > 区块2

* 表项1
    > 菜鸟教程
* 表项2

### 图片

![](../images/2023-01-02-16-34-32.png)

![](../images/newjeans.jpg) 
*new jeans*

### 公式

$$
\lim_{ x \to \infin}\frac{sin(x)}{x}=1
$$

在文章中嵌入 $\lim_{x \to \infin}$公式

### 表格

| 小甘  | 大甘 | 阿甘 |
| :---: | ---: | ---- |
|  17   |   18 | 19   |

### 链接
这是一个[链接](https://space.bilibili.com/179857757?spm_id_from=333.337.0.0)

<https://space.bilibili.com/179857757?spm_id_from=333.337.0.0>

这个链接用 bili 作为网址变量[bilibili][bili]

[bili]: https://space.bilibili.com/179857757?spm_id_from=333.337.0.0

### 代码块

```javascript
function myFunction()
{
    var x=5;
    return x;
}
```
    function myFunction()
    {
        var x=5;
        return x;
    }

### markdown高级技巧
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。

使用<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>重启电脑
