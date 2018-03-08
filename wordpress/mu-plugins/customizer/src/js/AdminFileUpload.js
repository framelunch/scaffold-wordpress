import { $ as jQuery } from 'jquery';
import Utils from './Utils';

export default class {
  /**
   * WP管理画面の項目を移動できる機能を不可にする
   */
  disableSort() {
    const sortableElement = jQuery('.meta-box-sortables');
    if (sortableElement) {
      sortableElement.sortable({
        disabled: true,
      });
    }
  }

  /**
   * ボタンにイベントをセット
   */
  uploadBindEvent() {
    const
      uploadButton = Utils.querySelectorAll('.upload-btn'),
      uploadClearButton = Utils.querySelectorAll('.upload-clear-btn')
    ;

    if (uploadButton) {
      uploadButton.forEach((button) => {
        button.addEventListener('click', this.uploadByMediaBox, false);
      });
    }

    if (uploadClearButton) {
      uploadClearButton.forEach((button) => {
        button.addEventListener('click', this.clearSelectedImage, false);
      });
    }
  }

  /**
   * ファイルアップロード画面の設定・オープン
   * @param e
   */
  uploadByMediaBox(e) {
    e.preventDefault();
    const
      args = e.currentTarget.attributes,
      customMedia = this.createCustomMedia()
    ;
    this.clearSelectedImage(e);

    customMedia.on('select', () => {
      const
        attachment = customMedia.state().get('selection').first().toJSON(),
        parentUrlInput = document.querySelector(`#${args['data-url-input'].nodeValue}`),
        urlInput = parentUrlInput.querySelector('input'),
        split = attachment.url.split('.'),
        ext = split[split.length - 1].toLowerCase(),
        imgExtensions = ['png', 'jpg', 'jpeg', 'gif', 'ico']
      ;
      let
        urlName = parentUrlInput.querySelector('p'),
        urlImage = parentUrlInput.querySelector('img')
      ;

      if (imgExtensions.some(v => v === ext)) {
        if (!urlImage) {
          urlImage = document.createElement('img');
          parentUrlInput.insertBefore(urlImage, parentUrlInput.firstChild);
        }
        urlImage.src = attachment.url;
      } else {
        if (!urlName) {
          urlName = document.createElement('p');
          parentUrlInput.insertBefore(urlName, parentUrlInput.firstChild);
        }
        urlName.textContent = Utils.baseName(attachment.url);
      }

      urlInput.value = attachment.url;
    });

    customMedia.open();
  }

  /**
   * 選択中の画像を削除
   * @param e
   */
  clearSelectedImage(e) {
    e.preventDefault();
    const
      args = e.currentTarget.attributes,
      parentUrlInput = document.querySelector(`#${args['data-url-input'].nodeValue}`),
      urlInput = parentUrlInput.querySelector('input'),
      urlImage = parentUrlInput.querySelector('img'),
      urlName = parentUrlInput.querySelector('p')
    ;
    urlInput.value = '';
    if (urlImage) {
      urlImage.remove();
    } else if (urlName) {
      urlName.remove();
    }
  }

  /**
   * MediaBoxの作成
   */
  createCustomMedia() {
    return wp.media({
      title: 'ファイルアップロード',
      library: { type: '' },
      frame: 'select',
      button: { text: '選択' },
      multiple: false,
    });
  }
}
