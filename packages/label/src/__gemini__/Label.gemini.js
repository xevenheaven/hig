gemini.suite("Label", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Label&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default")
      .capture("default - clicked", actions => {
        actions.click("label");
      });
  });
  gemini.suite("with reference to form element", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=Label&selectedStory=with%20reference%20to%20form%20element"
      )
      .setCaptureElements(".storybook-component")
      .capture("with reference to form element")
      .capture("with reference to form element - clicked", actions => {
        actions.click("label");
      });
  });
});
