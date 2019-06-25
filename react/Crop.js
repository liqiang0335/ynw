import React, { useEffect, useState, useRef } from "react";
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";
import styled from "styled-components";

/**
 * @param {File} file
 * @param {Object} cropper - cropperjs options
 * @param {Function} onSubmit(base64) - 回调函数, 参数中包含裁切图片的base64
 * @param {Number} width - 需要的图片宽度, 高度根据比例自动计算
 */
export default function Crop({ file, cropper, onSubmit, width = 160 }) {
  if (!file) {
    return null;
  }
  const [show, setShow] = useState(false);
  const [src, setsrc] = useState("");
  const img = useRef(null);
  const preview = useRef(null);
  const crop = useRef(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        setShow(true);
        setsrc(e.target.result);
      };
    }
  }, [file]);

  const onImageLoad = e => {
    crop.current = new Cropper(img.current, {
      aspectRatio: 16 / 9,
      viewMode: 2,
      preview: preview.current,
      ...cropper
    });
  };

  const close = () => {
    setShow(false);
    crop.current.destroy();
  };

  const submit = () => {
    const canvas = crop.current.getCroppedCanvas({ width, minWidth: width });
    const dataURL = canvas.toDataURL("image/jpeg");
    onSubmit(dataURL);
    close();
  };

  const display = { display: show ? "block" : "none" };

  return (
    <Background style={display}>
      <Box>
        <Left>
          <Title>图片裁切</Title>
          <Workspace>
            <Img src={src} onLoad={onImageLoad} ref={img} />
          </Workspace>
        </Left>
        <Right>
          <RightTitle>效果预览</RightTitle>
          <Preview ref={preview} />
          <Actions>
            <Button onClick={close}>取消</Button>
            <ButtonOK onClick={submit}>确定</ButtonOK>
          </Actions>
        </Right>
      </Box>
    </Background>
  );
}

// Style

const Background = styled.div`
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Box = styled.div`
  width: 1000px;
  height: 600px;
  background: white;
  margin: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  display: flex;
`;

const Left = styled.div`
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  display: flex;
`;

const Title = styled.div`
  padding: 15px;
`;

const RightTitle = styled(Title)`
  padding-left: 0;
`;

const Workspace = styled.div`
  flex-grow: 1;
`;

const Right = styled.div`
  width: 300px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex-shrink: 0;
  height: 100%;
  flex-grow: 1;
  border-left: 1px solid rgb(235, 235, 235);
  background: rgb(245, 245, 245);
`;

const Preview = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
`;

const Img = styled.img`
  max-width: 100%;
`;
const Actions = styled.div`
  margin-top: 20px;
`;

const Button = styled.div`
  padding: 10px 0;
  text-align: center;
  font-size: 15px;
  background: rgb(255, 59, 0);
  color: white;
  margin: 10px 0;
  cursor: pointer;
  user-select: none;
`;

const ButtonOK = styled(Button)`
  background: rgb(13, 91, 232);
`;
