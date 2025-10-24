# Example Project: Responsive Layouts

This is an example of how to use markdown with responsive layouts that mimic Notion's behavior.

## Basic Content

This is regular markdown content that will render normally. You can use **bold text**, *italic text*, and `inline code`.

### Lists
- First item
- Second item
- Third item

### Code Blocks
```javascript
function example() {
  console.log("This is a code block");
  return "Hello World";
}
```

---

## Responsive 3-Column Layout

Here's how to create a 3-column layout that stacks on mobile:

<div class="notion-columns">
<div>

### Column 1
This is the first column. On desktop, it will appear side by side with the other columns. On mobile, it will stack vertically.

**Features:**
- Responsive design
- Mobile-first approach
- Easy to maintain

</div>
<div>

### Column 2
This is the second column. The content here will automatically adjust based on screen size.

**Benefits:**
- Better readability
- Improved user experience
- Consistent spacing

</div>
<div>

### Column 3
This is the third column. All three columns will stack vertically on mobile devices.

**Technical Details:**
- Uses CSS Grid
- Tailwind CSS classes
- Breakpoint-based layout

</div>
</div>

---

## Different Column Layouts

### 2-Column Layout
<div class="notion-columns">
<div>

#### Left Side
Content for the left column goes here. This will create a 2-column layout on desktop.

</div>
<div>

#### Right Side
Content for the right column goes here. On mobile, this will stack below the left column.

</div>
</div>

### Mixed Content
<div class="notion-columns">
<div>

#### Text Content
This column contains regular text content that will flow naturally.

</div>
<div>

#### List Content
- Item 1
- Item 2
- Item 3
- Item 4

</div>
<div>

#### Code Example
```python
def hello_world():
    print("Hello from Python!")
    return True
```

</div>
</div>

---

## Tables

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Layout | 3 columns | Stacked |
| Spacing | 24px gap | 16px gap |
| Responsive | Yes | Yes |

---

## Blockquotes

> This is a blockquote example. It will be styled with a left border and italic text to distinguish it from regular content.

---

## How to Use This System

1. **Copy from Notion**: Export your Notion content as markdown
2. **Add Column Classes**: Wrap content in `<div class="notion-columns">` for responsive layouts
3. **Customize Styling**: Modify the `MarkdownRenderer` component for different styles
4. **Test Responsiveness**: Check how it looks on different screen sizes
