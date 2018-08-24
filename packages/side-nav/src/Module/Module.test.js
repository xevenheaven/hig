import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import Module from "./Module";

describe("side-nav/Module", () => {
  const onExpand = jest.fn();
  const onMinimize = jest.fn();
  const onClickTitle = jest.fn();
  const onClickCollapseButton = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  function getCollapseButton(wrapper) {
    return wrapper.find("CollapseButton");
  }

  describe("onClickTitle", () => {
    it("adds click handler to title", () => {
      const wrapper = mount(
        <Module title="Module" onClickTitle={onClickTitle} />
      );

      wrapper.find(".hig__side-nav__module__link__title").simulate("click");
      expect(onClickTitle).toHaveBeenCalled();
    });
  });

  describe("onClickCollapseButton", () => {
    it("adds click handler to collapse button", () => {
      const wrapper = mount(
        <Module title="Module" onClickCollapseButton={onClickCollapseButton}>
          Content
        </Module>
      );

      const collapseButton = getCollapseButton(wrapper);

      collapseButton.simulate("click");
      expect(onClickCollapseButton).toHaveBeenCalled();
    });
  });

  describe("onMinimize", () => {
    it("is called when the Module is minimized", () => {
      const wrapper = mount(
        <Module title="Module" defaultMinimized onMinimize={onMinimize}>
          Content
        </Module>
      );

      const collapseButton = getCollapseButton(wrapper);

      expect(onMinimize).not.toHaveBeenCalled();
      collapseButton.simulate("click");
      expect(onMinimize).not.toHaveBeenCalled();
      collapseButton.simulate("click");
      expect(onMinimize).toHaveBeenCalledTimes(1);
      collapseButton.simulate("click");
      expect(onMinimize).toHaveBeenCalledTimes(1);
    });
  });

  describe("onExpand", () => {
    it("is called when the Module is expanded", () => {
      const wrapper = mount(
        <Module title="Module" defaultMinimized onExpand={onExpand}>
          Content
        </Module>
      );

      const collapseButton = getCollapseButton(wrapper);

      expect(onExpand).not.toHaveBeenCalled();
      collapseButton.simulate("click");
      expect(onExpand).toHaveBeenCalledTimes(1);
      collapseButton.simulate("click");
      expect(onExpand).toHaveBeenCalledTimes(1);
      collapseButton.simulate("click");
      expect(onExpand).toHaveBeenCalledTimes(2);
    });
  });

  describe("minimized", () => {
    it("prevents default behavior", () => {
      const wrapper = mount(
        <Module
          title="Module"
          minimized
          onClickCollapseButton={onClickCollapseButton}
          onClickTitle={onClickTitle}
          onExpand={onExpand}
          onMinimize={onMinimize}
        >
          Content
        </Module>
      );

      const collapseButton = getCollapseButton(wrapper);

      collapseButton.simulate("click");
      collapseButton.simulate("click");
      collapseButton.simulate("click");

      expect(onClickCollapseButton).toHaveBeenCalledTimes(3);
      expect(onExpand).not.toHaveBeenCalled();
      expect(onMinimize).not.toHaveBeenCalled();
    });
  });

  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with mionimal props",
        props: {
          title: "Module"
        }
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <Module {...otherProps}>{children}</Module>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
