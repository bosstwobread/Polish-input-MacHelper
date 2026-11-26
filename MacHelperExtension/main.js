// The complete editable behavior of Polish-input. Saving reloads only this tool.
// MacHelper owns the shared toolbar, preview, and explicit, verified Apply action.
MacHelper.define({
  commands: {
    async polish(input) {
      const response = await MacHelper.ai.transform({
        action: "polish",
        text: JSON.stringify({text: input.text}),
        model: "", // Follow the provider and model chosen in MacHelper.
        systemPrompt: MacHelper.readText("prompts/polish.txt")
      }, partial => input.reportProgress({text: partial.text, title: "Polish-input"}));
      return {text: response.text, title: "Polish-input"};
    }
  }
});
