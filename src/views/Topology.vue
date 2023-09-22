<template>
  <div class="container">
    <h1 class="text">测试</h1>
    <div class="top-container">
      <div id="mountNode"></div>
    </div>
  </div>
</template>

<script>
import G6 from '@antv/g6'
export default {
  name: 'Topology',
  data() {
    return {}
  },
  created() {
    // console.log(JSON.parse(JSON.stringify("123")));
    // console.log(123);
  },
  mounted() {
    const data = {
      // 点集
      nodes: [
        {
          id: 'node1', // String，该节点存在则必须，节点的唯一标识
          label: 'Circle1',
          x: 100, // Number，可选，节点位置的 x 值
          y: 200 // Number，可选，节点位置的 y 值
        },
        {
          id: 'node2', // String，该节点存在则必须，节点的唯一标识
          label: 'Circle2',
          x: 300, // Number，可选，节点位置的 x 值
          y: 200 // Number，可选，节点位置的 y 值
        }
      ],
      // 边集
      edges: [
        {
          source: 'node1', // String，必须，起始点 id
          target: 'node2' // String，必须，目标点 id
        }
      ]
    }
    const graph = new G6.Graph({
      container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
      width: 400, // Number，必须，图的宽度
      height: 500, // Number，必须，图的高度
      defaultNode: {
        type: 'circle',
        size: [100],
        color: '#5B8FF9',
        style: {
          fill: '#9EC9FF',
          lineWidth: 3
        },
        labelCfg: {
          style: {
            fill: '#fff',
            fontSize: 20
          }
        }
      },
      defaultEdge: {
        style: {
          stroke: '#e2e2e2'
        }
      }
    })
    graph.data(data) // 读取 Step 2 中的数据源到图上
    graph.render() // 渲染图
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  border: red 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.text {
  border: red 1px solid;
}
/* #mountNode {
  border: red 1px solid;
} */
.top-container {
  border: red 1px solid;
  /* background: red; */
}
</style>
