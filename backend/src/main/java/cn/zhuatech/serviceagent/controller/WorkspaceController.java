/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.serviceagent.controller;
import cn.zhuatech.serviceagent.agent.AgentRuntime;
import cn.zhuatech.serviceagent.common.ApiResponse;
import cn.zhuatech.serviceagent.dto.ServiceAgentDto.*;
import cn.zhuatech.serviceagent.service.ServiceAgentService;
import cn.zhuatech.serviceagent.service.CustomerResponseGuardService;
import jakarta.validation.Valid;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
@RestController @RequestMapping("/api/shopfloor") @PreAuthorize("hasAnyRole('DOMAIN_USER','ADMIN')")
public class WorkspaceController {
 private final ServiceAgentService service; private final AgentRuntime runtime; private final CustomerResponseGuardService domainAgent;
 public WorkspaceController(ServiceAgentService service,AgentRuntime runtime,CustomerResponseGuardService domainAgent){this.service=service;this.runtime=runtime;this.domainAgent=domainAgent;}
 @GetMapping("/dashboard") public ApiResponse<Dashboard> dashboard(){return ApiResponse.ok(service.shopfloorDashboard());}
 @PostMapping("/work-orders/{id}/reports") public ApiResponse<ReportResult> report(@PathVariable Long id,@Valid @RequestBody ReportRequest request){return ApiResponse.ok("反馈提交成功",service.report(id,request));}
 @PostMapping("/agent-preview") public ApiResponse<AgentRuntime.AgentResult> preview(@RequestBody Map<String,String> body){return ApiResponse.ok(runtime.run(new AgentRuntime.AgentRequest(body.getOrDefault("objective","整理客户诉求并生成回复草案"),Map.of("mode","demo","approval","required"))));}
 @PostMapping("/response-guard") public ApiResponse<CustomerResponseGuardService.ResponseDecision> domainAction(@Valid @RequestBody CustomerResponseGuardService.ResponseRequest request){return ApiResponse.ok("客户回复风险检查完成",domainAgent.inspect(request));}
}
