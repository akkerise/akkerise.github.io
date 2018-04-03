function foo ()
{
  console.log("foo");
}
 
function bar ( )
{
  console.log("bar");
  foo();
}
 
function baz ()
{
  console.log("baz");
}
 
////Execute function to test Messages queue & call stack
bar();
baz();