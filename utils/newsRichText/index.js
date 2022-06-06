import Image from 'next/image';
import RichTextPageContentStyles from './RichTextPageContent.module.css';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export function getRichTextRenderOptions(links) {
  const assetBlockMap = new Map(
    links?.assets?.block?.map((asset) => [asset.sys.id, asset]),
  );

  return {

    // Hyper link
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          className="underline hover:no-underline"
          href={node.data.uri}
          target="_blank"
          rel="nofollow noreferrer"
        >
          {children}
        </a>
      ),

      // Image
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, height, width, description } = assetBlockMap.get(
          node.data.target.sys.id,
        );
        return (
          <div className={RichTextPageContentStyles.page__imgContainer}>
            <Image
              src={url}
              alt={description}
              height={height}
              width={width}
              layout="responsive"
            />
          </div>
        );
      },
    },
  };
}

export default function RichTextPageContent(props) {
  const { richTextBodyField, renderH2Links } = props;

  return (
    <div className={RichTextPageContentStyles.page__content}>
      {documentToReactComponents(
        richTextBodyField.json,
        getRichTextRenderOptions(richTextBodyField.links, { renderH2Links }),
      )}
    </div>
  );
}
