var result = null;

// Get the results for spelling correction type 1. "Showing results for:"
for (const tag of document.querySelectorAll("span")) {
    if (tag.textContent.includes("Showing results for")) {
      result = tag
    }
  }


// If results is null then could be spelling is wrong and Google is displaying spelling correction type 2. "Did you mean:"
if (result == null) {
    for (const tag of document.querySelectorAll("span")) {
        if (tag.textContent.includes("Did you mean:")) {
        result = tag
        }
    }
}

if (result != null) {
    var text = result.nextElementSibling.text
    document.getElementsByName('q')[0].value=text
    var element = document.querySelector('[aria-label="Google Search"]');
    element.form.submit()
}


// 2 types of spelling correctors for google:
// 1. Google shows results for what they think you want. Essentially no need to correct this one.
// 2. Google is not certain what you want and ask "Did you mean:". This should be corrected.