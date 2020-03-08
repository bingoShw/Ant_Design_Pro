import React from 'react'
import { Form, Input, InputNumber, Button, message,notification } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {ArticleAdd} from "../../services/article";

class Add extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  onFinish = values => {
    console.log(values);
    ArticleAdd({
        ...values,
      content:this.state.text
    }).then(res => {
      if (res.code === 0){
        message.success('新增成功');
        this.props.history.push('/article/list')
      } else {
        notification.error({
          message:`新增失败${res.msg}`
        })
      }
    })
  };
  handleChange(value){
    this.setState({
      text: value
    });
  }

  render() {
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
    };

    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ];

    const validateMessages = {
      required: 'This field is required!',
      types: {
        email: 'Not a validate email!',
        number: 'Not a validate number!',
      },
      number: {
        range: 'Must be between ${min} and ${max}',
      },
    };
      return(
        <div>
          <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
            <Form.Item name='articleSource' label="文章来源" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='title' label="标题" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='zan' label="点赞人数" rules={[{ type: 'number', min: 0}]}>
              <InputNumber />
            </Form.Item>
            <Form.Item label="文章详情">
              <ReactQuill value={this.state.text}
                          onChange={this.handleChange}
                          modules={modules}
                          formats={formats}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                添加
              </Button>
            </Form.Item>
          </Form>
        </div>
    )
  }
}
 export default Add
