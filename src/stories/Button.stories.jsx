import React from "react"
import { Button } from "../components/Button/Button"
import {convert_classVariant, convert_classIcon, convert_classBoxShadow} from "../components/Button/convertClass.js";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      source: { type: "dynamic" }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "ボタンに表示されるテキスト",
      type: { summary: "string" },
    },
    variant: {
      control: "radio",
      options: ["portfolio","blog","storybook"],
      description: "ボタンのスタイル",
      type: { summary: "string" },
    },
    icon: {
      control: "boolean",
      description: "アイコンの有無",
      type: { summary: "boolean" },
      defaultValue: false,
    },
    boxShadow: {
      control: "boolean",
      description: "box-shadowの有無",
      type: { summary: "boolean" },
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "ボタンの活性 / 非活性",
      type: { summary: "boolean" },
      defaultValue: false,
    },
  },
}
export default meta;

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  label: "詳しくはこちら",
  variant: "portfolio",
  icon: true,
  boxShadow: true,
  disabled: false,
}
Primary.parameters = {
  docs: {
    source: {
      language: "html",
      type: "dynamic", 
      transform: (_src, ctx) => {
        const {label, variant, icon, boxShadow, disabled} = ctx.args
        const classVariant = convert_classVariant(disabled,variant);
        const classIcon = convert_classIcon(icon)
        const classBoxShadow = convert_classBoxShadow(boxShadow)
        return `<button class="${classVariant} ${classIcon} ${classBoxShadow}">${label}</button>`
      },
    },
  },
}

export const Variant = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button {...args} label={args.label} />
      <Button label={args.label} variant="blog" icon="true" boxShadow="true" />
      <Button label={args.label} variant="storybook" icon="true" boxShadow="true" />
    </div>
  ),
  args: {
    label: "詳細はこちら",
    variant: "portfolio",
    icon: true,
    boxShadow: true,
    disabled: false,
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {label, icon, boxShadow,variant} = ctx.args
          const classIcon = convert_classIcon(icon)
          const classBoxShadow = convert_classBoxShadow(boxShadow)
          return `
            <button class="portfolio ${classIcon} ${classBoxShadow}">${label}</button>
            <button class="blog ${classIcon} ${classBoxShadow}">${label}</button>
            <button class="stroybook ${classIcon} ${classBoxShadow}">${label}</button>
          `.trim();
        },
      },
    },
  },
}

export const Icon = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button {...args} label={args.label} />
    </div>
  ),
  args: {
    label: "詳細はこちら",
    variant: "portfolio",
    icon: false,
    boxShadow: true,
    disabled: false,
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {label, variant, icon, boxShadow, disabled} = ctx.args
          const classVariant = convert_classVariant(disabled,variant);
          const classIcon = convert_classIcon(icon)
          const classBoxShadow = convert_classBoxShadow(boxShadow)
          return `
            <button class="${classVariant} ${classIcon} ${classBoxShadow}">${label}</button>
          `.trim();
        },
      },
    },
  },
}

export const BoxShadow = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button {...args} label={args.label} />
    </div>
  ),
  args: {
    label: "詳細はこちら",
    variant: "portfolio",
    icon: true,
    boxShadow: false,
    disabled: false,
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {label, variant, icon, boxShadow, disabled} = ctx.args
          const classVariant = convert_classVariant(disabled,variant);
          const classIcon = convert_classIcon(icon)
          const classBoxShadow = convert_classBoxShadow(boxShadow)
          return `
            <button class="${classVariant} ${classIcon} ${classBoxShadow}">${label}</button>
          `.trim();
        },
      },
    },
  },
}

export const Disabled = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button {...args} label={args.label} />
    </div>
  ),
  args: {
    label: "詳細はこちら",
    variant: "portfolio",
    icon: true,
    boxShadow: true,
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {label, variant, icon, boxShadow, disabled} = ctx.args
          const classVariant = convert_classVariant(disabled,variant);
          const classIcon = convert_classIcon(icon)
          const classBoxShadow = convert_classBoxShadow(boxShadow)
          return `
            <button class="${classVariant} ${classIcon} ${classBoxShadow}">${label}</button>
          `.trim();
        },
      },
    },
  },
}
