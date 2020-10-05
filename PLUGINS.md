# Plugins
These are the installed plugins
- jekyll-sitemap (no defined version)
- jekyll-feed (no defined version)
- jekyll-responsive-image (1.5.5)
- jekyll-archives (2.2.1)
- jekyll-webp


## Configurations

### `jekyll-responsive-image`

_NB: This plugin has its own dependency: you must install `rmagick` on your system for it to work._

Head to `_config.yml` to get this customized according to the guidelines below; note that **some keys are not required but recommended**:
```
# All the defaults for the plugin are declared below:
responsive_image:
  # [Optional, Default: 85]
  # Quality to use when resizing images.
  default_quality: 90

  # [Optional, Default: []]
  # An array of resize configuration objects. Each object must contain at least
  # a `width` value.
  sizes:
    - width: 480  # [Required] How wide the resized image will be.
      quality: 80 # [Optional] Overrides default_quality for this size.
    - width: 800
    - width: 1400
      quality: 90

  # [Optional, Default: false]
  # Rotate resized images depending on their EXIF rotation attribute. Useful for
  # working with JPGs directly from digital cameras and smartphones
  auto_rotate: false

  # [Optional, Default: false]
  # Strip EXIF and other JPEG profiles. Helps to minimize JPEG size and win friends
  # at Google PageSpeed.
  strip: false

  # [Optional, Default: assets]
  # The base directory where assets are stored. This is used to determine the
  # `dirname` value in `output_path_format` below.
  base_path: assets

  # [Optional, Default: assets/resized/%{filename}-%{width}x%{height}.%{extension}]
  # The template used when generating filenames for resized images. Must be a
  # relative path.
  #
  # Parameters available are:
  #   %{dirname}     Directory of the file relative to `base_path` (assets/sub/dir/some-file.jpg => sub/dir)
  #   %{basename}    Basename of the file (assets/some-file.jpg => some-file.jpg)
  #   %{filename}    Basename without the extension (assets/some-file.jpg => some-file)
  #   %{extension}   Extension of the file (assets/some-file.jpg => jpg)
  #   %{width}       Width of the resized image
  #   %{height}      Height of the resized image
  #
  output_path_format: assets/resized/%{width}/%{basename}

  # [Optional, Default: true]
  # Whether or not to save the generated assets into the source folder.
  save_to_source: false

  # [Optional, Default: false]
  # Cache the result of {% responsive_image %} and {% responsive_image_block %}
  # tags. See the "Caching" section of the README for more information.
  cache: false

  # [Optional, Default: []]
  # By default, only images referenced by the responsive_image and responsive_image_block
  # tags are resized. Here you can set a list of paths or path globs to resize other
  # images. This is useful for resizing images which will be referenced from stylesheets.
  extra_images:
    - assets/foo/bar.png
    - assets/bgs/*.png
    - assets/avatars/*.{jpeg,jpg}
```
