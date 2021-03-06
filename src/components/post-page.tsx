import React from "react";
import Box from "@material-ui/core/Box";
import { PostInfo, PostInfoProps } from "./post-info";
import { Page, PageProps } from "./page";
import { markdownStyles } from "../utils/markdown-styles";

export type PostPageProps = PostInfoProps &
  Omit<PageProps, "header" | "children" | "backgroundIsDark"> & {
    htmlContent: string;
  };

export function PostPage({
  htmlContent,
  background,
  backgroundIsDark,
  paper,
  breadcrumbs,
  ...postInfoProps
}: PostPageProps) {
  const markdownClasses = markdownStyles();

  const pageProps = {
    background,
    backgroundIsDark,
    paper,
    breadcrumbs,
  };

  return (
    <Page
      {...pageProps}
      backgroundIsDark={backgroundIsDark}
      header={
        <PostInfo {...postInfoProps} backgroundIsDark={backgroundIsDark} />
      }
    >
      <Box padding={{ xs: 2, sm: 6, md: 12 }} maxWidth="720px">
        <article
          className={markdownClasses.markdown}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </Box>
    </Page>
  );
}
