import { ContextProps } from "@easyblocks/app-utils";
import {
  ComponentCollectionLocalisedSchemaProp,
  ComponentCollectionSchemaProp,
  ComponentFixedSchemaProp,
  ComponentSchemaProp,
} from "@easyblocks/core";
import React, { FC } from "react";
import ComponentBuilder, {
  ComponentBuilderProps,
} from "../ComponentBuilder/ComponentBuilder";
import { BlocksControls } from "./BlockControls";

type EditableComponentBuilderProps = ComponentBuilderProps & {
  schemaProp:
    | ComponentSchemaProp
    | ComponentFixedSchemaProp
    | ComponentCollectionSchemaProp
    | ComponentCollectionLocalisedSchemaProp;
  contextProps: ContextProps;
  index: number;
  length: number;
};

type EditableComponentBuilderComponent = FC<EditableComponentBuilderProps>;

function EditableComponentBuilder(props: EditableComponentBuilderProps) {
  const { path, compiled, passedProps, index, length } = props;

  const content = (
    <BlocksControls
      path={path}
      id={compiled._id}
      templateId={compiled._template}
      disabled={compiled.__editing?.noInline}
      direction={compiled.__editing?.direction ?? "vertical"}
      compiled={compiled}
      index={index}
      length={length}
    >
      <ComponentBuilder
        compiled={compiled}
        path={path}
        passedProps={passedProps}
      />
    </BlocksControls>
  );

  return content;
}

export default EditableComponentBuilder;
export type {
  EditableComponentBuilderProps,
  EditableComponentBuilderComponent,
};