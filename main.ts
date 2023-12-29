import Parser from "./core/parser.ts";

function program() {
  const parser = new Parser();
  console.log("\nRepl v0.1");
  while (true) {
    const input = prompt("> ");

    if (!input || input.includes("exit")) {
      Deno.exit();
    }

    const program = parser.produceAST(input);
    console.log(program);
  }
}
program();
