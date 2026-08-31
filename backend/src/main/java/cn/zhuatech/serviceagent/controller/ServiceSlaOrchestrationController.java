/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.serviceagent.controller;

import cn.zhuatech.serviceagent.service.ServiceSlaOrchestrationService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** 企业级决策 API，调用方应保存请求、响应与审批审计轨迹。 */
@RestController
@RequestMapping("/api/enterprise/service-sla")
@CrossOrigin(originPatterns = {"http://localhost:*", "http://127.0.0.1:*"})
public class ServiceSlaOrchestrationController {
    private final ServiceSlaOrchestrationService service;

    public ServiceSlaOrchestrationController(ServiceSlaOrchestrationService service) {
        this.service = service;
    }

    @PostMapping("/orchestrate")
    public ServiceSlaOrchestrationService.Decision decide(@Valid @RequestBody ServiceSlaOrchestrationService.Request request) {
        return service.orchestrate(request);
    }
}
