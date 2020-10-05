# Jekyll Boilerplate
A basic Jekyll Boilerplate structure perfect to use with CloudCannon CMS

## Dependencies



### Editing CSS Custom Variables

Store all of your global site variables declared on `settings.yml` in the `:root` selector in order to make them available to the whole stylesheet. Syntax should be as follows:

```
--variable-name: {{site.data.settings.the-yaml-array-location}};
```

where the `--variable-name` is the one you will use in place of the CSS variable value by using a `var()` function, like the following syntax:

```
h2 {
  color: var(--variable-name);
}
```

Note: the variable must correspond to the CSS property being used; if conflicts result, the browser will refer to the standard stylesheet.
