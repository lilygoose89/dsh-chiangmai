## Main CSS

- class `fakeh1` is now called `impact-heading`
- 

## Sections
New sections can be added by using the `include` statement anywhere in the page and adding the following code blocks to the YAML frontmatter:

- When using the `inclusions.html` section:

```
inclusions:
  - title:
    icon_image:
```

- When using the `features.html` section:

```
features:
  - title:
    subtitle: #leave blank if unwanted
    content_html:
    price: #leave blank if unwanted
    add_button: #boolean (true/false)
    button_url:
```
_NB: this section is directly related to the `above-the-fold-container title-hero` section hence it must be placed directly **after** it to render appropriately._

- When using the `mini-gallery.html` section:

```
gallery:
  - image:
    alt_text:
```

- When using the `specialties.html` section:

```
specialties:
  - title:
    content_html: >-
    price:
    add_button:
    button_url:
```
