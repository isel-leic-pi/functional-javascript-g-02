/*
Implement a recursive function that returns all of the unique dependencies,
 and sub-dependencies of a module, sorted alphabetically. Dependencies should 
 be printed as dependency@version e.g. []()'.

Multiple versions of the same module are allowed, but duplicates modules 
of the same version should be removed.

## Arguments:

  * tree: A dependency tree. See below for an example of the structure.

## Example

    var loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    }

    getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]


## Conditions:

  * Do not use any for/while loops.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
## Boilerplate

*/
function getDependencies(tree) {
	if (tree && tree.dependencies) {
		let dependencies = tree.dependencies
		let ans = []
		Object.keys(dependencies).forEach((key) => {
			var moduleName = `${key}@${dependencies[key].version}`
			ans = ans.concat([moduleName], getDependencies(dependencies[key]))
    })
    var novaArr = ans.filter(function(este, i) { //eliminar elementos repetidos
      return ans.indexOf(este) === i;
     });
		return novaArr.sort();
	}
	return []
}

    module.exports = getDependencies

    var loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    }

   console.log( getDependencies(loremIpsum)) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]