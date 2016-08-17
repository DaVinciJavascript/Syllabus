Animations
===================

The purpose of this folder is to house animation keyframes that will be reuse throughout the site.

Expected structure:

* group similar keyframes into a single file within reason.  Ideally the file should be kept to a manageable size.
* files should be named starting with an underscore, for instance, if you take the below keyframe, your file should be `_flash.scss`


```
@keyframes flash {
  0% {
    background-color: red;
  }
  50% {
    background-color: goldenrod;
  }
  100% {
    background-color: red;
  }
}

```