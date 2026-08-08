/* Copyright 2026 上海如静知华信息科技有限公司 */
package cn.zhuatech.serviceagent.agent;
import org.springframework.stereotype.Component; import java.util.List; import java.util.Map;
/** 企业客户服务智能体平台运行边界；默认演示执行器不连接真实模型、业务系统或外部通信渠道。 */
public interface AgentRuntime {
 AgentResult run(AgentRequest request);
 record AgentRequest(String objective,Map<String,String> context){}
 record AgentStep(String name,String status,String evidence){}
 record AgentResult(String runtime,String summary,List<AgentStep> steps,Map<String,Object> metrics){}
}
@Component class DemoAgentRuntime implements AgentRuntime {
 public AgentResult run(AgentRequest request){
  return new AgentResult("service-copilot-demo","已识别客户诉求、匹配服务政策并形成回复草案，退款和高情绪风险事项等待人工坐席确认。",List.of(new AgentStep("诉求识别","COMPLETED","识别产品、订单与情绪标签"),new AgentStep("知识检索","COMPLETED","引用 5 条有效服务政策"),new AgentStep("人工接管","PENDING","等待服务主管复核")),Map.of("evidenceItems",9,"suggestedActions",4,"objectiveLength",request.objective().length()));
 }
}
