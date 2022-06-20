const name1 = "Saman";            // this syntax is prefered //
const name2: string = "Saman";    // explicitly set type //
const name3 = <string>"Saman";    // another syntax //
const name4 = "Saman" as string;  // another syntax //

/**
 * used this function to log a name
 * @param {string} name - the name we want to log
 */
function logname(name: string) {
  console.log(name);
}
